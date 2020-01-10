import React from 'react';

function SockAbbrevs(props) {
    return (
        <div className="col-lg-4">
            <p>These instructions are written for the magic loop or two circular needles methods, 
                as they reference the first needle and second needle.  To adapt for dpns, 
                the first needle is dpn one and two and the second needle is dpn three and four.</p>
                <h3>Abbreviations</h3>
                <p className="abbrList">
                    BOR = beginning of round<br />
                    k = knit<br />
                    {props.direction === 'toeup' && 
                        <span>
                            kfb = k in front and back of same st <br />
                        </span>
                    } 
                    p = purl<br />
                    {props.heeltype === 'flap' && <span>p2tog = p two together<br /></span>}
                    Rep = repeat<br />
                    Rnd(s) = round(s)<br />
                    RS = right side<br />
                    sl = slip (purlwise unless otherwise specified)<br />
                    {props.direction === 'cuffdown' &&
                        <span>
                            ssk = <a href="https://www.lionbrand.com/faq/80.html?language=" 
                            target="_blank" rel="noopener noreferrer">
                                slip, slip, knit (left-leaning decrease)
                            </a><br />
                        </span>
                    }
                    st(s) = stitch(es)<br />
                    WS = wrong side<br />
                    {props.heeltype === 'shortrow' && 
                        <span>w&amp;t = <a href="http://www.purlsoho.com/create/2008/06/18/short-rows/" 
                            target="_blank" rel="noopener noreferrer">wrap and turn</a><br /></span> }
                    wyib = with yarn in back<br />
                    wyif = with yarn in front
                </p>
        </div>
    );   
}

export default SockAbbrevs;