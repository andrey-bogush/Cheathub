/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  useQuery,
  UseQueryResult,
  useInfiniteQuery,
  // useQueryClient,
  // useMutation,
  useQueryClient,
} from 'react-query';
import axios from 'axios';
// import { LoggedinHeader } from '../components/shared/header';
// import { Search } from '../components/snippet_crud/search-form';
import { SnippetFeed } from '../components/snippet-feed';
// import { ToUserButton } from '../components/shared/special-button'
import { getRequest } from '../lib/fetcher';
import { fetchSnippets, useSnippetsInfinite } from '../lib/axios';
import { useUserContext } from '../context/user.context';
import { checkStatus } from '../lib/isError';
import Layout from '../components/layout';
import useIntersectionObserver from '../lib/useIntersect';
import {
  MainHeader,
  // MainFeed,
  Container as MainContainer,
} from '../components/layout/commonCard';
import Navbar from '../components/navbar';
// import useIntersectionObserver from '../lib/useIntersect';

interface ProfileProps extends RouteComponentProps<{ id: string }> {
  snippets: Snippet[];
}

export const SnipTest: React.FC<ProfileProps> = ({
  snippets,
  history,
  match,
}) => {
  const user = useUserContext();
  const queryClient = useQueryClient();
  const username = user!.username ? user!.username : 'joem';
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchBy, setSearchBy] = React.useState<SearchBy>('title');
  const [tagId, setTagId] = React.useState('');
  const [usernameId, setUsernameId] = React.useState('');
  const onTagIdClick = () => setTagId(tagId);
  const onUsernameIdClick = () => setUsernameId(usernameId);

  const [tagParam, setTagParam] = React.useState<string>('');
  const [pageParam, setPageParam] = React.useState<number>(1);

  const {
    data,
    status,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['snips', tagParam],
    async () => fetchSnippets({ page: pageParam, tag: tagParam }),
    {
      getNextPageParam: (res) => {
        if (res.meta.has_next) {
          return res.meta.page + 1;
        }
        return false;
      },
    }
  );

  const target = React.useRef<HTMLDivElement>(null);

  useIntersectionObserver(target, {
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  const message = checkStatus(status, error);

  if (message) return <p>{message}</p>;
  return (
    <Layout>
      {/* <LoggedinHeader
        loggedIn={true}
        username={match.params.id}
      /> */}
      {/* <Navbar /> */}
      {/* <MainHeader>
        {tagParam && (
          <p style={{ color: '#fff' }}>Searching by {tagParam}</p>
        )}
        <button
          type="button"
          style={{ color: '#fff' }}
          onClick={() => {
            setPageParam(1);
            setTagParam('');
          }}
        >
          Reset
        </button>
      </MainHeader> */}

      {data?.pages?.map((page, i) => (
        <SnippetFeed
          key={i}
          setTagId={onTagIdClick}
          setUsernameId={onUsernameIdClick}
          searchBy={searchBy}
          searchTerm={searchTerm}
          snippets={page?.items}
          username={username}
          // tagParam={tagParam}
          setTagParam={setTagParam}
        />
      ))}

      <div ref={target} />
      {isFetchingNextPage && <p>...loading more</p>}
      {!isLoading && !hasNextPage && <p>You caught them all</p>}
    </Layout>
  );
};
