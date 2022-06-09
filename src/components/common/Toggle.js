import { useState } from 'react';
import { Switch } from '@headlessui/react';
import PreviousMap from 'postcss/lib/previous-map';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Toggle(props) {
  const [enabled, setEnabled] = useState(false);

  const handleToggle =() => {
    setEnabled(!enabled);
    props.onToggle();
  }

  return (
    <Switch
      checked={props.toggle}
      onChange={props.onChange}
      className={classNames(
        props.toggle ? 'bg-toggle-green' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-indigo-500'
      )}
    >
      {props.toggle ? (
        <span className='text-center ml-1 text-sm text-pooch-blue-2'>ON</span>
      ) : (
        <span className='sr-only'></span>
      )}
      <span
        aria-hidden='true'
        className={classNames(
          props.toggle ? 'translate-x-2' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      />
    </Switch>
  );
}
