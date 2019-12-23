import React from 'react';

function HeelFlap(props) {
    return(
        <div id="flapInstructions">
            <h3>Heel</h3>
            <h4>Heel Flap</h4>
            <p>This flap uses a slip-stitch heel stitch.  Feel free to substitute any stitch pattern, as long as the length ends up the same.  One suggestion is the <a href="http://www.haveayarn.ca/stitch/03_2009_stitch_of_the_month.htm" target="_blank" rel="noopener noreferrer">eye of partridge heel stitch</a>.</p>
            <p>The flap is worked flat over the next { props.state.fullStCount / 2 } sts.</p>
            <p>Row 1 (RS): *k1, sl1 wyib; rep from * to end<br />
            Row 2 (WS): p to last stich, sl1 wyif
            </p>
            <p>Rep rows 1 and 2 { (props.state.fullStCount / 4) - 1 } more times, or until flap is length desired, ending after a RS row.</p>

            <h4>Heel Turn</h4>
            <p>Row 1 (WS): p{ (props.state.fullStCount / 4) + 2 }, p2tog, p1, turn<br />
            Row 2 (RS): sl1 wyib, k5, ssk, k1, turn<br />
            Row 3 (WS): sl1 wyif, p to one st before gap, p2tog, p1, turn<br />
            Row 4 (RS): sl1 wyib, k to one st before gap, ssk, k1, turn</p>
            <p>Rep rows 3 and 4 until all gaps have been closed and all heel sts have been worked, ending with a RS row.  The last repeats of rows 3 and 4 will not include the final p1 and k1, respectively.</p>

            <h4>Return to working in the rnd</h4>
            <p>Your heel turn has just ended on a RS row. Continue working this RS row in the following manner:</p>
            <p>
                Pick up and knit each edge st along first side of the heel flap<br />
                Place marker<br />
                Knit across the instep (i.e. the sts you have not been working for the heel)<br />
                Place marker<br />
                Pick up and knit each edge st along the other side of the heel flap<br />
                Knit all heel sts, placing a marker halfway through the heel to mark BOR, if desired
            </p>
            <p>You have now returned all sts to your needles and are ready to continue working in the rnd.</p>
            <h4>Gusset</h4>
            <p>Rnd 1: k to 3 sts before marker, k2tog, k1, k across instep (to marker), k1, ssk, k to BOR<br />
            Rnd 2: k around</p> 
            <p>Rep rnds 1 and 2 until the st count has returned to {props.state.fullStCount}.</p>
            <p>Be sure to stay aware of which half of the sts is your instep and which half is your sole. You will need this information for the toe.</p>
        </div>
    )
}

export default HeelFlap;