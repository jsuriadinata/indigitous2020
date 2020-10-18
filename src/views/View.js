import React from 'react';
import Iframe from 'react-iframe';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import $ from "jquery"

const View = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
              <div class="container">
                  <div class="navbar-header">
                      <a asp-area="" href="/" class="navbar-brand">Instagram</a>
                      <a asp-area="" href="View" class="navbar-brand">TikTok</a>
                  </div>
              </div>
            </nav>

            <div class="jumbotron text-center">
                <h1>TikTok</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3 class="text-center">Top Liked Post</h3>
                    </div>
                    <div class="col">
                        <h3 class="text-center">Top Commented Post</h3>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col btn-group">
                        <button type="button" class="btn btn-primary">Week</button>
                        <button type="button" class="btn btn-primary">Month</button>
                        <button type="button" class="btn btn-primary">All-Time</button>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col btn-group">
                        <button type="button" class="btn btn-primary">Week</button>
                        <button type="button" class="btn btn-primary">Month</button>
                        <button type="button" class="btn btn-primary">All-Time</button>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col">
                        <Iframe url="https://www.tiktok.com/embed/6883135381974437125"
                            width="320px"
                            height="660px"
                            frameBorder="0"
                            allowFullScreen
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                        />
                    </div>
                    <div class="col">
                        <dl>
                            <dt>Date</dt>
                            <dd id="ttLikedDate">21 Jul 2018</dd>
                            <dt class="mt-3">Likes</dt>
                            <dd id="ttLikedLikes">14</dd>
                            <dt class="mt-3">Comments</dt>
                            <dd id="ttLikedComments">14</dd>
                            <dt class="mt-3">Shares</dt>
                            <dd id="ttLikedShares">23</dd>
                        </dl>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col">
                        <Iframe url="https://www.tiktok.com/embed/6878721976144334086"
                            width="320px"
                            height="660px"
                            frameBorder="0"
                            allowFullScreen
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                        />
                    </div>
                    <div class="col">
                        <dl>
                            <dt>Date</dt>
                            <dd id="ttComDate">11 Jul 2018</dd>
                            <dt class="mt-3">Likes</dt>
                            <dd id="ttComLikes">14</dd>
                            <dt class="mt-3">Comments</dt>
                            <dd id="ttComComments">14</dd>
                            <dt class="mt-3">Shares</dt>
                            <dd id="ttComShares">45</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View
