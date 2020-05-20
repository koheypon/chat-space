# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true|
|mail|integer|null: false|
|password|integer|null: false|
### Association
- has_many :groups, through: :group_users
- has_many :group_users

messagesテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|user_id|integer|null: false|
|text|text|null: false|
|img|string|
### Association
- belong_to :users
- has_many :groups, through: :group_user

groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|int|null: false, unique: true|
### Association
- has_many :users
- belong_to :messages

group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|messages_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user