import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Splash = () => {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container">
                  <div class="navbar-header">
                      <a asp-area="" href="/" class="navbar-brand">Instagram</a>
                      <a asp-area="" href="View" class="navbar-brand">TikTok</a>
                  </div>
              </div>
            </nav>

            <div class="jumbotron text-center">
                <h1>Instagram</h1>
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
                        <button type="button" class="btn btn-info">Week</button>
                        <button type="button" class="btn btn-info">Month</button>
                        <button type="button" class="btn btn-info">All-Time</button>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col btn-group">
                        <button type="button" class="btn btn-info">Week</button>
                        <button type="button" class="btn btn-info">Month</button>
                        <button type="button" class="btn btn-info">All-Time</button>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col">
                        <InstagramEmbed
                            url='https://instagram.com/p/CGbD6dFnCfR/?utm_source=ig_web_copy_link'
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </div>
                    <div class="col">
                        <dl>
                            <dt>Date</dt>
                            <dd>21 Jul 2018</dd>
                            <dt class="mt-3">Likes</dt>
                            <dd>14</dd>
                            <dt class="mt-3">Comments</dt>
                            <dd>14</dd>
                        </dl>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col">
                        <InstagramEmbed
                            url='https://instagram.com/p/CGF10IAhGFd/'
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </div>
                    <div class="col">
                        <dl>
                            <dt>Date</dt>
                            <dd>11 Jul 2018</dd>
                            <dt class="mt-3">Likes</dt>
                            <dd>14</dd>
                            <dt class="mt-3">Comments</dt>
                            <dd>14</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash
