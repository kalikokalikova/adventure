class Api::V1::PointsController < ApplicationController
    before_action :set_point, only: %i[ show update destroy ]

    # GET /points
  def index
    params[:ulongitude] = params[:ulongitude].to_d
    params[:zoom] = params[:zoom].to_i
    @points = Point.within_zoom(params)

    render json: @points
  end

  # GET /points/1
  def show
    render json: @point
  end

  # POST /points
  def create
    @point = Point.new(point_params)

    if @point.save
      render json: @point, status: :created, location: @point
    else
      render json: @point.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /points/1
  def update
    if @point.update(point_params)
      render json: @point
    else
      render json: @point.errors, status: :unprocessable_entity
    end
  end

  # DELETE /points/1
  def destroy
    @point.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_point
      @point = Point.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def point_params
      params.require(:point).permit(:name, :description, :latitude, :longitude)
    end
end
