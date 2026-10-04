import React from 'react';
import { Dam } from '../types';
import { StateDamsExplorer, SupportedMajorState } from './StateDamsExplorer';

interface MaharashtraDamsExplorerProps {
  onSelectDam: (dam: Dam) => void;
  onTriggerSos: (dam: Dam) => void;
  activeState?: SupportedMajorState;
  onStateChange?: (state: SupportedMajorState) => void;
}

export const MaharashtraDamsExplorer: React.FC<MaharashtraDamsExplorerProps> = ({
  onSelectDam,
  onTriggerSos,
  activeState = 'Maharashtra',
  onStateChange
}) => {
  return (
    <StateDamsExplorer
      initialState={activeState}
      activeState={activeState}
      onStateChange={onStateChange}
      onSelectDam={onSelectDam}
      onTriggerSos={onTriggerSos}
    />
  );
};
