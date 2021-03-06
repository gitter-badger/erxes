import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from '/imports/react-ui/layout/containers';
import settingsRoute from '../routes.jsx';
import { List, InAppMessaging, Twitter, Facebook } from './containers';


const integrations = settingsRoute.group({
  prefix: '/integrations',
});


integrations.route('/in_app_messaging', {
  name: 'settings/integrations/in_app_messaging',

  action() {
    mount(MainLayout, { content: <InAppMessaging /> });
  },
});

// twitter ===========
integrations.route('/twitter', {
  name: 'settings/integrations/twitter',

  action() {
    mount(MainLayout, { content: <Twitter type="link" /> });
  },
});

integrations.route('/oauth/twitter_callback', {
  name: 'settings/integrations/twitter/oauth/callback',

  action() {
    mount(MainLayout, { content: <Twitter type="form" /> });
  },
});

// facebook =====================
integrations.route('/facebook', {
  name: 'settings/integrations/facebook',

  action() {
    mount(MainLayout, { content: <Facebook /> });
  },
});

integrations.route('/:integrationId?', {
  name: 'settings/integrations/list',

  action() {
    mount(MainLayout, { content: <List /> });
  },
});
