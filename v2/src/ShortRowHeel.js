import React from 'react';

function ShortRowHeel(props) {
    return (
        <div id="shortRowHeel">
            <h3>Heel</h3>
            <p>The short row heel is worked flat over the next {props.state.fullStCount / 2} sts, which are half your total sts.  References to the first and last sts in these instructions refer to the first of this half and the last of this half of your sts, i.e. the heel sts.</p>

            <h4>First half of the heel</h4>
            <p>Row 1 (RS): k across to last st, w&amp;t<br />
            Row 2 (WS): p back to first st, w&amp;t<br />
            Row 3 (RS): k to st before wrapped st, w&amp;t<br />
            Row 4 (WS): p to st before wrapped st, w&amp;t</p>

            <p>Rep rows 3 and 4 until {props.getMultiple((props.state.fullStCount / 6), 2)} sts are left unwrapped, ending after a WS row.</p>

            <h4>Second half of the heel</h4>
            <p>Row 1 (RS): k to first wrapped st, k the wrapped st while picking up the wrap, turn<br />
            Row 2 (WS): sl1 wyif, p to first/next wrapped st, p the wrapped st while picking up the wrap, turn<br />
            Row 3 (RS): sl1 wyib, k to next wrapped st, k the wrapped st while picking up the wrap, turn</p>
            <p>Rep rows 2 and 3 until all wraps have been picked up, ending with a RS row.  You are now ready to continue in the rnd to work the rest of the sock.</p>
        </div>  
    );
}

export default ShortRowHeel;