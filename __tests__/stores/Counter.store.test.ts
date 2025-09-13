import { makeAutoObservable } from 'mobx';

// Example MobX store for testing
class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };

  reset = () => {
    this.count = 0;
  };

  addValue = (value: number) => {
    this.count += value;
  };

  get isPositive() {
    return this.count > 0;
  }

  get isNegative() {
    return this.count < 0;
  }

  get absoluteValue() {
    return Math.abs(this.count);
  }
}

describe('CounterStore', () => {
  let store: CounterStore;

  beforeEach(() => {
    store = new CounterStore();
  });

  it('initializes with count 0', () => {
    expect(store.count).toBe(0);
  });

  it('increments count', () => {
    store.increment();
    expect(store.count).toBe(1);
    
    store.increment();
    expect(store.count).toBe(2);
  });

  it('decrements count', () => {
    store.decrement();
    expect(store.count).toBe(-1);
    
    store.decrement();
    expect(store.count).toBe(-2);
  });

  it('resets count to 0', () => {
    store.increment();
    store.increment();
    expect(store.count).toBe(2);
    
    store.reset();
    expect(store.count).toBe(0);
  });

  it('adds arbitrary values', () => {
    store.addValue(5);
    expect(store.count).toBe(5);
    
    store.addValue(-3);
    expect(store.count).toBe(2);
    
    store.addValue(0);
    expect(store.count).toBe(2);
  });

  describe('computed values', () => {
    it('correctly computes isPositive', () => {
      expect(store.isPositive).toBe(false); // 0 is not positive
      
      store.increment();
      expect(store.isPositive).toBe(true);
      
      store.decrement();
      store.decrement();
      expect(store.isPositive).toBe(false);
    });

    it('correctly computes isNegative', () => {
      expect(store.isNegative).toBe(false); // 0 is not negative
      
      store.decrement();
      expect(store.isNegative).toBe(true);
      
      store.increment();
      store.increment();
      expect(store.isNegative).toBe(false);
    });

    it('correctly computes absoluteValue', () => {
      expect(store.absoluteValue).toBe(0);
      
      store.addValue(5);
      expect(store.absoluteValue).toBe(5);
      
      store.addValue(-10);
      expect(store.absoluteValue).toBe(5); // |-5| = 5
    });
  });

  describe('complex scenarios', () => {
    it('handles multiple operations correctly', () => {
      store.increment(); // 1
      store.increment(); // 2
      store.addValue(3); // 5
      store.decrement(); // 4
      
      expect(store.count).toBe(4);
      expect(store.isPositive).toBe(true);
      expect(store.isNegative).toBe(false);
      expect(store.absoluteValue).toBe(4);
    });

    it('maintains state consistency', () => {
      const operations = [
        () => store.increment(),
        () => store.decrement(),
        () => store.addValue(10),
        () => store.reset(),
        () => store.addValue(-5),
      ];

      operations.forEach(op => {
        const beforeCount = store.count;
        op();
        
        // Verify computed values are consistent with count
        expect(store.isPositive).toBe(store.count > 0);
        expect(store.isNegative).toBe(store.count < 0);
        expect(store.absoluteValue).toBe(Math.abs(store.count));
      });
    });
  });
});