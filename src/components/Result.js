import React from 'react';

function Result(data) {
    
    return (
        <div className="w-2/3 h-16 text-lg border-b border-l border-r border-gray-500 rounded-lg">
            <div className="h-full flex flex-row items-center justify-center space-x-24">
                <h1>
                    {data.data[0].name}
                </h1>
                <h1>
                    Age: {data.data[0].age}
                </h1>
                <h1>
                    Position: {data.data[0].position}
                </h1>
            </div>
        </div>
    )
}

export default Result;