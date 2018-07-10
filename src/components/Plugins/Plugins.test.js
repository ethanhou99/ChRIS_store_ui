import React from 'react';
import { shallow } from 'enzyme';
import Plugins from './Plugins';

describe('Plugins', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Plugins />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render plugins-container div', () => {
    expect(wrapper.find('div.plugins-container')).toHaveLength(1);
  });

  it('should render plugins-stats inside of plugins-container', () => {
    expect(wrapper
      .find('div.plugins-container')
      .find('div.plugins-stats'))
      .toHaveLength(1);
  });

  it('should render row div inside plugins-stats', () => {
    expect(wrapper
      .find('div.plugins-stats')
      .find('div.row'))
      .toHaveLength(1);
  });

  it('should render plugins-found span inside plugins-stats row', () => {
    expect(wrapper
      .find('div.plugins-stats')
      .find('span.plugins-found'))
      .toHaveLength(1);
  });

  it('should render DropdownButton component inside plugins-stats row', () => {
    expect(wrapper
      .find('div.plugins-stats-row')
      .find('DropdownButton'))
      .toHaveLength(1);
  });

  it('should render 1 MenuItem component inside DropdownButton', () => {
    expect(wrapper
      .find('DropdownButton')
      .find('MenuItem'))
      .toHaveLength(1);
  });

  it('every MenuItem component should have eventKey prop', () => {
    wrapper.find('MenuItem').forEach((item) => {
      expect(item.prop('eventKey')).toBeDefined();
    });
  });

  it('should render plugins-row inside of plugins-container', () => {
    expect(wrapper
      .find('div.plugins-container')
      .find('div.plugins-row.row').length)
      .toEqual(1);
  });

  it('should render PluginsCategories component inside plugins-row', () => {
    expect(wrapper
      .find('div.plugins-row')
      .find('PluginsCategories'))
      .toHaveLength(1);
  });

  it('should render plugins-list div inside plugins-row', () => {
    expect(wrapper
      .find('div.plugins-row')
      .find('div.plugins-list').length)
      .toEqual(1);
  });

  it('should render "Loading Plugins" spinner if pluginList is null', () => {
    expect(wrapper
      .find('div.plugins-list')
      .find('div.drawer-pf-loading')
      .find('span.spinner').length)
      .toEqual(1);
  });
});

const samplePluginList = [
  {
    href: 'someurl1',
    data: {
      title: 'testTitle1',
      name: 'testName1',
      authors: 'testAuthor1',
      dock_image: 'dock/image1',
      creation_date: '2018-06-19T15:29:11.349272Z',
    },
  },
  {
    href: 'someurl2',
    data: {
      title: 'testTitle2',
      name: 'testName2',
      authors: 'testAuthor2',
      dock_image: 'dock/image2',
      creation_date: '2018-06-19T15:29:11.349272Z',
    },
  },
];

describe('rendered Plugins', () => {
  let wrapper;
  let plugins;
  beforeEach(() => {
    wrapper = shallow(<Plugins />);
    wrapper.setState({ pluginList: samplePluginList });
    plugins = Array.from(wrapper.find('Plugin'));
  });

  it('should render the correct number of Plugin components', () => {
    expect(wrapper.find('Plugin')).toHaveLength(2);
  });

  it('should render the correct number for "plugins found"', () => {
    expect(wrapper.find('span.plugins-found').text()).toEqual('2 plugins found');
  });

  it('should render the title prop for each Plugin', () => {
    plugins.forEach((plugin, i) => {
      expect(plugin.props.title).toEqual(`testTitle${i + 1}`);
    });
  });

  it('should render the name prop for each Plugin', () => {
    plugins.forEach((plugin, i) => {
      expect(plugin.props.name).toEqual(`testName${i + 1}`);
    });
  });

  it('should render the author prop for each Plugin', () => {
    plugins.forEach((plugin, i) => {
      expect(plugin.props.author).toEqual(`testAuthor${i + 1}`);
    });
  });

  it('should render the creation_date prop for each Pllugin', () => {
    plugins.forEach((plugin) => {
      expect(plugin.props.creationDate).toEqual('2018-06-19T15:29:11.349272Z');
    });
  });
});