class PinsController < ApplicationController

  def index
    @pins = Pin.all
    respond_to do |f|
      f.html
      f.json {render :json => @pin, :only => [:lat, :long]}
    end
    @pin = Pin.new
  end

  def create
    @pin = Pin.create(pin_params)
      if @pin.save
        respond_to do |f|
          f.json {render :json => @pin, :status => :created }
        end
      else
        f.json {render :json => @pin.errors, :status => :unprocessable_entity }
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:lat, :long)  
  end

end
