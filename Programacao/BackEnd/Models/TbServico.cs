using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    [Table("tb_servico")]
    public partial class TbServico
    {
        public TbServico()
        {
            TbConsulta = new HashSet<TbConsulta>();
        }

        [Key]
        [Column("id_servico")]
        public int IdServico { get; set; }
        [Required]
        [Column("nm_servico", TypeName = "varchar(45)")]
        public string NmServico { get; set; }
        [Column("vl_preco_servico", TypeName = "decimal(15,2)")]
        public decimal VlPrecoServico { get; set; }
        [Required]
        [Column("ds_especificacoes", TypeName = "varchar(200)")]
        public string DsEspecificacoes { get; set; }

        [InverseProperty("IdServicoNavigation")]
        public virtual ICollection<TbConsulta> TbConsulta { get; set; }
    }
}
