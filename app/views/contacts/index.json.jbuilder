json.array!(@contacts) do |contact|
  json.extract! contact, :name, :email, :comment
  json.url contact_url(contact, format: :json)
end
