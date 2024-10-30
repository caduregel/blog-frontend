import '../App.css'
import '../globals.css'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import CoolSpinner from '../components/spinner';

const link = 'https://blog-api-production-530e.up.railway.app/api'

function About() {
    return (
        <>
            <div>
                <h1> About This Blog</h1>
                <p>Welcome to my blog! I’m Liam, a self-taught developerwith a passion for continuous learning and skill-building. This blog was created as a hands-on project to test and showcase my full-stack development skills.</p>
                <p>The platform itself is built using React and Bootstrap on the frontend for a clean, responsive design, while the backend is powered by Mongoose, Express, and MongoDB to manage and serve content efficiently. To keep everything organized, I developed a custom content management system (CMS) that supports a smooth, intuitive experience for both readers and myself as a creator.</p>
                <p>I’ve added features like commenting, keyword search, and tag-based filtering to make it easier for you to find content that interests you. For a more tailored experience, there’s also a theme switcher that allows you to customize the site’s appearance to your preference.
                </p>
                <p>I hope you find the posts here engaging and informative. I always welcome feedback and comments, as they help shape future projects and topics. Thanks for visiting, and enjoy exploring! </p>
                <p>If you’re interested in the code behind this blog, the source for the frontend, backend, and CMS can be found on GitHub:</p>
                <ul>

                <p><a class="link-opacity-100" href="https://github.com/caduregel/blog-frontend">Blog Client</a></p>
                <p><a class="link-opacity-100" href="https://github.com/caduregel/blog-api">Blog Rest API</a></p>
                </ul>
                <a href="/">Go back</a>
            </div>
        </>
    )
}
export default About
