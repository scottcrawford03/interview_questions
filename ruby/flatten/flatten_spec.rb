require 'rspec'
require './flatten'

describe 'flatten' do
  context 'no arguments' do
    it 'flattens an empty array' do
      expect([].flatten).to eq([])
    end

    it 'flattens a single level array' do
      expect([1, 2].flatten).to match_array([1, 2])
    end

    it 'flattens an array with 1 level nesting' do
      expect([1, [2]].flatten).to match_array([1, 2])
    end

    it 'flattens the craziest nesting that we hope to never see IRL' do
      expect([1, [2, [3, [4, [5]]]]].flatten).to match_array([1, 2, 3, 4, 5])
    end
  end

  context 'declaring a level for flattening' do
    it 'flattens the full array with no args' do
      expect([1, [2, [3]]].flatten).to match_array([1, 2, 3])
    end

    it 'handles 0 depth as an argument' do
      expect([1, [2, [3]]].flatten(0)).to match_array([1, [2, [3]]])
    end

    it 'handles 1 depth as an argument' do
      expect([1, [2, [3]]].flatten(1)).to match_array([1, 2, [3]])
    end
  end
end
