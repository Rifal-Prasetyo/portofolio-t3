'use client'
import { useColorScheme } from '@mui/material/styles';
import { Moon, Sun } from '@phosphor-icons/react/dist/ssr';

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  return (
    <button className='bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 ease-in-out'
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        {
          mode === 'light' ? (<Sun/>) : (<Moon/>)

        }
    </button>
  );
}

export default ModeSwitcher;
