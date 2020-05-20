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
|user_id|integer|null: false|
|name|integer|null: false, unique: true|
|mail|integer|null: false|
|password|integer|null: false|
### Association
- has_many :messages
- belong_to :groups
- has_many :group_user

messagesテーブル
|Column|Type|Options|
|------|----|-------|
|messages_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|text|integer|null: false, foreign_key: true|
|img|string|
### Association
- belong_to :users
- has_many :groups 
- has_many :group_user

groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, unique: true|
|number_id|integer|null: false|
|message_id|integer|null: false|
### Association
- has_many :users
- belong_to :messages

group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|messages_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user