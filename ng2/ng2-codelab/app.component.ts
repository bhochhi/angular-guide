import { Component } from '@angular/core';

import { AnalyticsTrackerService } from './services/analytics-tracker.service';

/**
 * Root component for the entire Angular 2 YouTube app.
 */
@Component({
  selector: 'youtube-app',
  template: '',  // TODO(M1): Use app.component.html instead.
  styleUrls: ['app.component.css'],
  viewProviders: [ AnalyticsTrackerService ]
})
export class YoutubeAppComponent {}
