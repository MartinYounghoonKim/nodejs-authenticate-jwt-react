import * as React from 'react';

import InfiniteScroll from 'react-infinite-scroller';

interface IProps {
    loadFunction: () => void;
    height: string;
}
class InfiniteTable extends React.Component<IProps, {}> {
    constructor (props: IProps) {
        super(props);
    }
    render () {
        const {
            children,
            height,
            loadFunction
        } = this.props;
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
    }
}

export default InfiniteTable;