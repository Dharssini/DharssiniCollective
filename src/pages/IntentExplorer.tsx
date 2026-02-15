import { useState } from 'react';
import IntentGateway from '../components/intent/IntentGateway';
import FitReport from '../components/intent/FitReport';
import FocusMode from '../components/intent/FocusMode';
import type { IntentContext, PathRecommendation, RoleFitReport } from '../types/intent';
import { routeIntent } from '../utils/intentRouter';
import { useNavigate } from 'react-router-dom';

type ViewState = 'gateway' | 'report' | 'focus';

export default function IntentExplorer() {
  const navigate = useNavigate();
  const [viewState, setViewState] = useState<ViewState>('gateway');
  const [report, setReport] = useState<RoleFitReport | null>(null);
  const [path, setPath] = useState<PathRecommendation | null>(null);

  const handleIntentComplete = (context: IntentContext) => {

    // Route to appropriate view
    const result = routeIntent(context);

    if (result.type === 'report') {
      setReport(result.data);
      setViewState('report');
    } else {
      setPath(result.data);
      setViewState('focus');
    }
  };

  const handleSkipToFreeExplore = () => {
    navigate('/learning');
  };

  const handleReportExploreFreely = () => {
    navigate('/learning');
  };

  const handleReportChangeRole = () => {
    setViewState('gateway');
    setReport(null);
    setPath(null);
  };

  const handleFocusExit = () => {
    navigate('/learning');
  };

  const handleFocusChangeIntent = () => {
    setViewState('gateway');
    setReport(null);
    setPath(null);
  };

  return (
    <>
      {viewState === 'gateway' && (
        <IntentGateway onComplete={handleIntentComplete} onSkip={handleSkipToFreeExplore} />
      )}

      {viewState === 'report' && report && (
        <FitReport
          report={report}
          onExploreFreely={handleReportExploreFreely}
          onChangeRole={handleReportChangeRole}
        />
      )}

      {viewState === 'focus' && path && (
        <FocusMode
          path={path}
          onExit={handleFocusExit}
          onChangeIntent={handleFocusChangeIntent}
        />
      )}
    </>
  );
}
