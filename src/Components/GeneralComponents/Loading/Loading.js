import React from 'react';
import LoadingBar from 'react-redux-loading-bar'

export default class Loading extends React.Component {
    render() {
        console.log('loading');
        return (
            <header>
                <LoadingBar style={{zIndex:9999}} updateTime={5} maxProgress={95} progressIncrease={10} showFastActions />
            </header>
        )
    }
}