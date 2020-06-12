import React, { useState } from 'react';

const Lyrics = (props) => {

    let [lyrics, setLyrics] = useState("");

    const apiUri = 'https://api.lyrics.ovh/v1/';

    const getLyrics = (e) => {
        document.getElementById("spinner").style.visibility = "visible";
        e.preventDefault()
        const artist = document.getElementById('artist').value;
        const song = document.getElementById('song').value;

        fetch(apiUri + artist + "/" + song + '/')
            .then(res => res.json())
            .then(res => {
                document.getElementById("spinner").style.visibility = "hidden";
                document.getElementById("jumbotron").style.visibility = "visible";
                setLyrics(lyrics = res.lyrics);
            })

    }

    return (
        <div className="lyric-form">
            <form>
                <div className="input-group flex-nowrap">
                    <input type="text" className="form-control" placeholder="Song" aria-label="SOng" aria-describedby="addon-wrapping" id="song" />
                </div>
                <br />
                <div className="input-group flex-nowrap">
                    <input type="text" className="form-control" placeholder="Artist" aria-label="Artist" aria-describedby="addon-wrapping" id="artist" />
                </div>
                <br />
                <div className="btnWrap">
                    <button type="button" onClick={getLyrics} className="btn btn-dark">Get Lyrics</button>
                </div>

                <br />

                <div className="spinner-border text-dark" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </div>

                <div className="lyrics">
                    <div className="lyric-holder" id="jumbotron">
                        <div >
                            {
                                lyrics.split("\n").map((i, key) => {
                                    return <div key={key}>{i}</div>;
                                })
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Lyrics;