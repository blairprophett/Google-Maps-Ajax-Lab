class PinsController < ApplicationController

  def index
    @pins = Pin.all
    respond_to do |f|
      f.html
      f.json {render :json => @pins}
    end
    @pin = Pin.new
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.name - current_user.email
    
    respond_to do |f|
      if @pin.save
        f.json {render json: @pin, status: :created}
      else
        f.json {render json: @pin.errors, :status => :unprocessable_entity }
      end
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:lat, :long)  
  end

end
