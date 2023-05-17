class AddLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :url
      t.string :title
      t.string :tag
      t.boolean :archived, default: false
      t.boolean :faved, default: false

      t.timestamps
    end
  end
end
