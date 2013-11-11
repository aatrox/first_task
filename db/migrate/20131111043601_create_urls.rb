class CreateUrls < ActiveRecord::Migration
  def change
    create_table :urls do |t|
    	t.string :original_url
		t.string :shorten_url
    end
  end
end