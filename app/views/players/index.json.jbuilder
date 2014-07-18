json.array!(@players) do |player|
  json.extract! player, :grepo_id, :name, :alliance_id, :points, :rank, :town_count
  json.url player_url(player, format: :json)
end
