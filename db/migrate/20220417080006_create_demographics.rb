class CreateDemographics < ActiveRecord::Migration[6.1]
  def change
    create_table :demographics do |t|
      t.string :first_name
      t.string :middle_initial
      t.string :last_name
      t.string :prefix
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :education
      t.string :estimated_income

      t.timestamps
    end
  end
end
