using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    [Table("tb_cliente")]
    public partial class TbCliente
    {
        public TbCliente()
        {
            TbConsulta = new HashSet<TbConsulta>();
        }

        [Key]
        [Column("id_cliente")]
        public int IdCliente { get; set; }
        [Column("id_login")]
        public int IdLogin { get; set; }
        [Required]
        [Column("nm_cliente", TypeName = "varchar(45)")]
        public string NmCliente { get; set; }
        [Required]
        [Column("ds_cpf", TypeName = "varchar(45)")]
        public string DsCpf { get; set; }
        [Required]
        [Column("ds_telefone", TypeName = "varchar(45)")]
        public string DsTelefone { get; set; }
        [Required]
        [Column("ds_estado", TypeName = "varchar(45)")]
        public string DsEstado { get; set; }
        [Required]
        [Column("ds_cidade", TypeName = "varchar(45)")]
        public string DsCidade { get; set; }
        [Required]
        [Column("ds_cep", TypeName = "varchar(9)")]
        public string DsCep { get; set; }
        [Column("nr_residenical")]
        public int NrResidenical { get; set; }
        [Column("ds_complemento", TypeName = "varchar(45)")]
        public string DsComplemento { get; set; }
        [Required]
        [Column("ds_sexo", TypeName = "varchar(2)")]
        public string DsSexo { get; set; }
        [Column("dt_nascimento", TypeName = "datetime")]
        public DateTime DtNascimento { get; set; }
        [Required]
        [Column("ds_lougradouro", TypeName = "varchar(45)")]
        public string DsLougradouro { get; set; }

        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbCliente))]
        public virtual TbLogin IdLoginNavigation { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbConsulta> TbConsulta { get; set; }
    }
}
