import React from 'react';

const IntervalSelector = ({ intervals, onSelectInterval }) => {
    return (
        <div>
            {intervals.map((interval) => (
                <button key={interval} onClick={() => onSelectInterval(interval)}>
                    {interval}
                </button>
            ))}
        </div>
    );
};

export default IntervalSelector;
