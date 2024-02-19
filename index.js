//Problem-1

function sumElements(set1, set2) {
    let sum = 0;
    
    for (let element of set1) {
      if (!set2.includes(element)) {
        sum += element;
      }
    }
    
    for (let element of set2) {
      if (!set1.includes(element)) {
        sum += element;
      }
    }
    
    return sum;
  }

//Problem-2

function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function areOrthogonalVectors(vectors) {
    let n = vectors.length / 2;
    
    if (vectors.length % 2 !== 0) {
      throw new Error('Number of vectors must be even');
    }
    
    for (let i = 0; i < n; i++) {
      let v1 = vectors[2 * i];
      let v2 = vectors[2 * i + 1];
      
      if (dotProduct(v1, v2) !== 0) {
        return false;
      }
    }
    
    return true;
  }