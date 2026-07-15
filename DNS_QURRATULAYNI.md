# Configuration DNS — qurratulayni.com

IONOS → Domaines & SSL → qurratulayni.com → DNS

## À supprimer

```
Type : A
Nom : @
Valeur : 217.160.0.108
```

(supprimer aussi tout enregistrement AAAA sur @ s'il existe)

## À ajouter

```
Type : A
Nom : @
Valeur : 216.198.79.1
```

```
Type : A
Nom : @
Valeur : 64.29.17.1
```

```
Type : CNAME
Nom : www
Valeur : d7eb77cdf67d5115.vercel-dns-017.com
```

## Notes

- Si un CNAME `www` existe déjà, remplacer sa valeur.
- Ne pas toucher aux enregistrements MX.
- TTL : valeur par défaut.
