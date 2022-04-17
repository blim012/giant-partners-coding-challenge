class DemographicsController < ApplicationController
  def index
    @states = obj_to_a(Demographic.group(:state).count).sort
    @education = obj_to_a(Demographic.group(:education).count).sort
    @estimated_income = obj_to_a(Demographic.group(:estimated_income).count).sort
    @total = Demographic.count
  end

  private
  
  def obj_to_a(obj)
    obj.map do |key, val|
      [key, val]
    end
  end
end
