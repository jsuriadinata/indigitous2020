import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InstagramEmbed from 'react-instagram-embed';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import $ from "jquery"

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
                    <div class="col text-center">
                        <ToggleButtonGroup class="btn-group d-flex w-100" type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1} variant="info">Week</ToggleButton>
                            <ToggleButton value={2} variant="info">Month</ToggleButton>
                            <ToggleButton value={3} variant="info">All-Time</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1} variant="info">Week</ToggleButton>
                            <ToggleButton value={2} variant="info">Month</ToggleButton>
                            <ToggleButton value={3} variant="info">All-Time</ToggleButton>
                        </ToggleButtonGroup>
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
                            <dd id="igLikedDate">21 Jul 2018</dd>
                            <dt class="mt-3">Likes</dt>
                            <dd id="igLikedLikes">14</dd>
                            <dt class="mt-3">Comments</dt>
                            <dd id="igLikedComments">14</dd>
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
                            <dd id="igComDate">11 Jul 2018</dd>
                            <dt class="mt-3">Likes</dt>
                            <dd id="igComLikes">14</dd>
                            <dt class="mt-3">Comments</dt>
                            <dd id="igComComments">14</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

function buttonClicked() {
    // Handle click event
    $('button').on('click', function(){
        $('button').removeClass('selected');
        $(this).addClass('selected');
    });
}

export default Splash
