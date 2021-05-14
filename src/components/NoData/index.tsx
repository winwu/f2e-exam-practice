import React from 'react';

export default function NoData(props: { text: string }) {
    return (
        <div className="text-center m-4" data-testid="no-data">{props.text}</div>
    )
}