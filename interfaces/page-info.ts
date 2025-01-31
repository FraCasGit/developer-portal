import {
  ForumOption,
  SortOption,
} from '@/components/integrations/sitecore-community/SitecoreCommunity.api';
import {
  SitecoreCommunityEvent,
  SitecoreCommunityContent,
  StackExchangeQuestion,
  Tweet,
  YouTubeVideo,
} from './integrations';

type PageInfoCore = {
  description?: string;
  hasInPageNav?: boolean;
  heroImage?: string;
  id?: string;
  partials?: string[];
  title: string;
  pageTitle?: string;
};

// Input for 3rd party integrations are just strings
export type MarkdownMeta = PageInfoCore & {
  stackexchange?: string | string[];
  twitter?: string | string[];
  youtube?: string;
  sitecoreCommunityBlog?: number | boolean;
  sitecoreCommunityBlogSort?: SortOption | SortOption[];
  sitecoreCommunityEvents?: boolean;
  sitecoreCommunityNews?: boolean;
  sitecoreCommunityQuestions?: number | boolean;
  sitecoreCommunityQuestionsSort?: SortOption | SortOption[];
  sitecoreCommunityQuestionsCategory?: ForumOption | ForumOption[];
};

type SitecoreCommunityData = {
  blog?: SitecoreCommunityContent[];
  blogSort?: SortOption | SortOption[];
  events?: SitecoreCommunityEvent[];
  news?: SitecoreCommunityContent[];
  questions?: SitecoreCommunityContent[];
  questionsSort?: SortOption | SortOption[];
  questionsForums?: ForumOption | ForumOption[];
};

// Output for 3rd party integrations contain specific data structures
export type PageInfo = PageInfoCore & {
  stackexchange: StackExchangeQuestion[];
  twitter: Tweet[];
  twitterHandle?: string;
  youtube: YouTubeVideo[];
  youtubeTitle?: string;
  youtubePlaylistTitle?: string;
  sitecoreCommunity: SitecoreCommunityData;
  sitecoreCommunityBlogSort?: SortOption | SortOption[];
  sitecoreCommunityQuestionsSort?: SortOption | SortOption[];
  sitecoreCommunityQuestionsCategory?: ForumOption | ForumOption[];
};

export type ChildPageInfo = {
  description?: string;
  id?: string;
  link: string;
  title: string;
};

export type PartialData = {
  content: string[];
  titles: string[];
};

export type PagePartialGroup = {
  title: string;
  description?: string;
  partials: PartialData;
};

export type TrialNavContext = {
  trial: string;
  parent: string;
  child: string;
};

type TrialNavChild = {
  title: string;
  slug: string;
};

type TrialNavParent = {
  title: string;
  slug: string;
  children: TrialNavChild[];
};

export type TrialNavData = {
  title: string;
  description?: string;
  nav: TrialNavParent[];
};
