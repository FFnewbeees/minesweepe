
export type CellValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 'M';

export interface CellType {
    value: CellValue;
    revealed: boolean;
    flagged: boolean;
}

interface CellProps {
    cell: CellType;
    onClick: () => void;
    onRightClick: (event: React.MouseEvent) => void;
}

const Cell: React.FC<CellProps> = ({ cell, onClick, onRightClick }) => {
    const renderContent = () => {
        if (cell.flagged) {
            return '🚩';
        }

        if (!cell.revealed) {
            return null;
        }

        if (cell.value === 'M') {
            return '💣';
        }

        return cell.value ? cell.value : '';
    };

    return (
        <button
            className={`cell ${cell.revealed ? 'revealed' : ''}`}
            onClick={onClick}
            onContextMenu={onRightClick}
        >
            {renderContent()}
        </button>
    );
};

export default Cell;