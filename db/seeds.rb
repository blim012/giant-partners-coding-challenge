require 'csv'

CSV.foreach('./lib/seeds/coding-challenge.csv', headers: true) do |row|
  d = Demographic.new
  d.first_name = row['FIRST NAME']
  d.middle_initial = row['MIDDLE INITIAL']
  d.last_name = row['LAST NAME']
  d.prefix = row['PREFIX']
  d.address_1 = row['ADDRESS 1']
  d.address_2 = row['ADDRESS 2']
  d.city = row['CITY']
  d.state = row['STATE']
  d.zip_code = row['ZIP CODE']
  d.education = row['EDUCATION']
  d.estimated_income = row['ESTIMATED INCOME']
  d.save
end
