class PinsController < ApplicationController

  def new
  end

  def index
    @pins = Pin.all
  end


  
end
