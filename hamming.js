class Hamming {
    compute(strand1, strand2) {
        let strand1Array, strand2Array, distance;

        if (strand1.length != strand2.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        strand1Array = strand1.split('');
        strand2Array = strand2.split('');
        distance = 0;

        strand1Array.forEach((item, index1) => {
            if (item !== strand2Array[index1]) {
                distance++;
            }
        });

        return distance;
    }
}

export default Hamming;
