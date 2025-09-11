 function addProduct() {
            const url = document.getElementById('product-url').value;
            const site = document.getElementById('site-type').value;
            const maxPrice = document.getElementById('max-price').value;
            
            if (!url) {
                alert('Veuillez entrer un lien de produit');
                return;
            }
            
            const btn = document.querySelector('.btn-primary');
            btn.classList.add('loading');
            btn.innerHTML = '<i class="fas fa-spinner"></i> Ajout...';
            
            // Simulation d'ajout
            setTimeout(() => {
                btn.classList.remove('loading');
                btn.innerHTML = '<i class="fas fa-plus"></i> Ajouter';
                alert('Produit ajouté avec succès !');
                document.getElementById('product-url').value = '';
            }, 1500);
        }
        
        // Filtres
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });



    