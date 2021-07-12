import Head from 'next/head';
import {useCallback} from 'react';
import {Layout, NavButtonLink} from '../../components';
import {
  counterQuery,
  counterSlice,
  useRootDispatch,
  useRootSelector,
} from '../../redux';
import styles from './HomePage.module.css';

export const HomePage = (): JSX.Element => {
  const count = useRootSelector((state) => state.counter.value);
  const dispatch = useRootDispatch();

  const plus = useCallback(
    () => dispatch(counterSlice.actions.increment()),
    [dispatch],
  );
  const plusPlus = useCallback(
    () => dispatch(counterSlice.actions.incrementByAmount(2)),
    [dispatch],
  );
  const minus = useCallback(
    () => dispatch(counterSlice.actions.decrement()),
    [dispatch],
  );

  const thunk = useCallback(() => dispatch(counterQuery()), [dispatch]);

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Example Web Template</h1>
      <div>
        <button aria-label="Increment value" onClick={plus} type="button">
          Increment
        </button>
        <button aria-label="Increment value" onClick={plusPlus} type="button">
          Increment++
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={minus} type="button">
          Decrement
        </button>

        <button aria-label="Decrement value" onClick={thunk} type="button">
          Async
        </button>
      </div>
      <p>A simple app to showcase the architecture for frontend apps</p>
      <div style={{paddingTop: '1rem'}}>
        <NavButtonLink href="/users">
          <p>Users</p>
        </NavButtonLink>
        <span className={styles.spacer} />
        <NavButtonLink href="/posts">
          <p>Posts</p>
        </NavButtonLink>
        <span className={styles.spacer} />
        <NavButtonLink href="/comments">
          <p>Comments</p>
        </NavButtonLink>
      </div>
    </Layout>
  );
};
