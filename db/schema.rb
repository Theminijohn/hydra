# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140718143354) do

  create_table "players", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "grepo_id"
    t.integer  "alliance_id"
    t.integer  "points"
    t.integer  "rank"
    t.integer  "town_count"
  end

  add_index "players", ["alliance_id"], name: "index_players_on_alliance_id"
  add_index "players", ["grepo_id"], name: "index_players_on_grepo_id"
  add_index "players", ["points"], name: "index_players_on_points"
  add_index "players", ["rank"], name: "index_players_on_rank"
  add_index "players", ["town_count"], name: "index_players_on_town_count"

end
