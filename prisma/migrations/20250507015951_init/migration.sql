-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "username" TEXT,
    "passeord" TEXT,
    "role" TEXT,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "type_post" INTEGER,
    "title" TEXT,
    "excerpt" TEXT,
    "slug" TEXT,
    "image" TEXT,
    "body" TEXT,
    "link_preview" TEXT,
    "link_github" TEXT,
    "status" TEXT,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CVFile" (
    "id" TEXT NOT NULL,
    "file_path" TEXT,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3),

    CONSTRAINT "CVFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Music" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "album" TEXT,
    "artist" TEXT,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3),

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "body" TEXT,
    "post_id" TEXT,
    "comment_id" TEXT,
    "created_at" TIMESTAMP(3),

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpotifyHistory" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "track_id" TEXT NOT NULL,
    "track_name" TEXT,
    "artist_name" TEXT,
    "album_name" TEXT,
    "album_image_url" TEXT,
    "played_at" TIMESTAMP(3) NOT NULL,
    "duration_ms" INTEGER,
    "preview_url" TEXT,

    CONSTRAINT "SpotifyHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppActivity" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "app_name" TEXT,
    "process_name" TEXT,
    "window_title" TEXT,
    "started_at" TIMESTAMP(3),
    "ended_at" TIMESTAMP(3),

    CONSTRAINT "AppActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SpotifyHistory_track_id_key" ON "SpotifyHistory"("track_id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CVFile" ADD CONSTRAINT "CVFile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpotifyHistory" ADD CONSTRAINT "SpotifyHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppActivity" ADD CONSTRAINT "AppActivity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
