class Point < ApplicationRecord
    attr_accessor :name, :description, :latitude, :longitude

    scope :within_zoom, -> (params) { where(longitude: params[:ulongitude]-get_longitude_scope(params[:zoom])..params[:ulongitude]+get_longitude_scope(params[:zoom]))}

    def self.get_longitude_scope(zoom)
        # return number of longitude degrees on each side of user location coordinate

        case zoom
        when 0
            360/2
        when 1
            180/2
        when 2
            90/2
        when 3
            45/2
        when 4
            22.5/2
        when 5
            11.25/2
        when 6
            5.625/2
        when 7
            2.813/2
        when 8
            1.406/2
        when 9
            0.703/2
        when 10
            0.352/2
        when 11
            0.176/2
        when 12
            0.088/2
        when 13
            0.044/2
        when 14
            0.022/2
        when 15
            0.011/2
        when 16
            0.005/2
        when 17
            0.003/2
        when 18
            0.001/2
        when 19
            0.0005/2
        when 20
            0.00025/2
        end
    end

    
end
