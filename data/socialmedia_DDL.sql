CREATE TABLE public.account
(
  id serial NOT NULL PRIMARY KEY,
  id_user bigint,
  name character varying
);

CREATE TABLE public.post
(
  id serial NOT NULL PRIMARY KEY,
  id_user bigint,
  id_post bigint,
  status_message varchar,
  link_name varchar,
  status_type varchar,
  status_link varchar,
  status_published timestamp without time zone,
  num_reactions integer,
  num_comments integer,
  num_shares integer,
  num_likes integer,
  num_loves integer,
  num_wows integer,
  num_hahas integer,
  num_sads integer,
  num_angrys integer,
  num_special integer,
  hashtags varchar
);

CREATE TABLE public.comment
(
  id serial not null PRIMARY KEY,
  id_user bigint,
  id_post bigint,
  comment_id bigint,	
  coment varchar,
  from_id bigint,
  from_name varchar,
  created_time timestamp,
  post_id varchar
);


CREATE TABLE public.follower
(
  id serial NOT NULL PRIMARY KEY,
  id_follower bigint,
  gender varchar,
  live varchar,
  studied varchar,
  work_name varchar
);

-- DROP TABLE public.account;
-- DROP TABLE public.post;
-- DROP TABLE public.comment;
-- DROP TABLE public.follower;
