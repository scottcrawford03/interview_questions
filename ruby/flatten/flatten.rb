class Array
  def flatten(level = -1)
    init = []
    each do |a|
      if a.is_a?(Array) && !level.zero?
        level -= 1
        init +=  a.flatten(level)
      else
        init << a
      end
    end
    init
  end
end
