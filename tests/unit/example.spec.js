import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../src/components/home/HomeProducts.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = '';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text());
  });
});
