import { Component } from '@angular/core';

@Component({
       selector: 'about',
       template: `<div>
            <h1>About this App...</h1>
            This app has been built according to the YouTube tutorial<br />
            <i>{{video.title}}</i><br/>by<br/><em>{{video.author}}</em>.
       </div>`
})
export class AboutComponent {
    video = {
        title: "Angular2 In 60 Minutes",
        author: "Traversy Media"
    };
}
