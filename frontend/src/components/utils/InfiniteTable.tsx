import * as React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import {ReactNode} from "react";

interface IProps {
    loadFunction: () => void;
    height?: string;
    children: ReactNode
}
const InfiniteTable = ({ height, loadFunction, children }: IProps) => {
    const style = {
        height,
        overflow: 'auto'
    };
    return (
        <div style={style}>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunction}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                {children}
            </InfiniteScroll>
        </div>
    )
};

InfiniteTable.defaultProps = {
    height: 'auto'
};

export default InfiniteTable;